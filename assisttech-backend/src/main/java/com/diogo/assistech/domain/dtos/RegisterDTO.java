package com.diogo.assistech.domain.dtos;

import com.diogo.assistech.domain.enums.Perfil;

import java.util.Set;

public record RegisterDTO(String nome, String cpf, String email, String senha) {
}
