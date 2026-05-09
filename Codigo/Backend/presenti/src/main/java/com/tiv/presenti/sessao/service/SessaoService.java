package com.tiv.presenti.sessao.service;

import com.tiv.presenti.exceptions.exceptionType.ResourceNotFoundException;
import com.tiv.presenti.sessao.model.Sessao;
import com.tiv.presenti.sessao.persistence.SessaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessaoService {

    private final SessaoRepository sessaoRepository;

    public SessaoService(SessaoRepository sessaoRepository) {
        this.sessaoRepository = sessaoRepository;
    }

    public List<Sessao> listarTodas() {
        return sessaoRepository.findAll();
    }

    public Sessao buscarPorId(String id) {
        return sessaoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Sessão com ID " + id + " não existe"));
    }

    public List<Sessao> listarPorTurma(String idTurma) {
        return sessaoRepository.findAllByIdTurmaOrderByTimestampDesc(idTurma);
    }

    public List<Sessao> listarPorStatus(String status) {
        String statusNormalizado = normalizarStatus(status);
        return sessaoRepository.findAllByStatusOrderByTimestampDesc(statusNormalizado);
    }

    public Sessao buscarPorToken(String token) {
        return sessaoRepository.findByToken(token)
                .orElseThrow(() -> new ResourceNotFoundException("Sessão com token " + token + " não existe"));
    }

    public Sessao buscarSessaoAtualDaTurma(String idTurma) {
        var sessaoEmAndamento = sessaoRepository
                .findFirstByIdTurmaAndStatusOrderByTimestampDesc(idTurma, "EM_ANDAMENTO");

        if (sessaoEmAndamento.isPresent()) {
            return sessaoEmAndamento.get();
        }

        return sessaoRepository
                .findFirstByIdTurmaAndStatusOrderByTimestampDesc(idTurma, "ABERTA")
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Nenhuma sessão atual encontrada para a turma " + idTurma
                ));
    }

    private String normalizarStatus(String status) {
        if (status == null || status.isBlank()) {
            throw new IllegalArgumentException("Status da sessão é obrigatório");
        }

        String valor = status.trim().toUpperCase();

        return switch (valor) {
            case "ABERTA" -> "ABERTA";
            case "EM_ANDAMENTO", "ANDAMENTO" -> "EM_ANDAMENTO";
            case "ENCERRADA", "FECHADA" -> "ENCERRADA";
            default -> throw new IllegalArgumentException(
                    "Status inválido. Use: ABERTA, EM_ANDAMENTO ou ENCERRADA"
            );
        };
    }
}