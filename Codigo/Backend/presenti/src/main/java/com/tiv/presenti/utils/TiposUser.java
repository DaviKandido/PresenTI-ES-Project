package com.tiv.presenti.utils;

public enum TiposUser {
  ADMIN("admin"),
  PROFESSOR("professor"),
  ALUNO("aluno");

  public String tipo;


  TiposUser(String tipo){
    this.tipo = tipo;
  }

  public String getTipo(){
    return this.tipo;
  }

  public void setTipo(String tipo){
    this.tipo = tipo;
  }

}