package com.diogo.assistech.repositories;

import com.diogo.assistech.domain.Tecnico;
import org.springframework.data.jpa.repository.JpaRepository;

import com.diogo.assistech.domain.Pessoa;
import java.util.List;
import java.util.Optional;


public interface PessoaRepository extends JpaRepository<Pessoa, Integer>{

	Optional<Pessoa> findByCpf(String cpf);
	boolean existsByEmail(String email);

	Optional<Pessoa> findByEmail(String email);
	
}
