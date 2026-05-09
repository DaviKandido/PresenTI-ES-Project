import { StyleSheet } from 'react-native';
import { appColors } from '@/styles/appColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.blue.dark,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    iconeHeader: {
        width: 40,
    },
    tituloHeader: {
        color: appColors.gray[50],
        fontSize: 18,
        fontWeight: '600',
    },
    iconesDireita: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 65,
        justifyContent: 'flex-end',
    },
    areaCentral: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circuloIcone: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    mensagem: {
        color: appColors.gray[300],
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        paddingHorizontal: 40,
        lineHeight: 24,
    },
    areaBotao: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    botaoSimples: {
        height: 52,
        width: '100%',
        backgroundColor: appColors.blue.medium,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoSimples: {
        color: appColors.gray[300],
        fontSize: 16,
        fontWeight: '500',
    }
});