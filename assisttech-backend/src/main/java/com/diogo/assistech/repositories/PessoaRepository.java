package com.diogo.assistech.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diogo.assistech.domain.Pessoa;
import java.util.List;
import java.util.Optional;


public interface PessoaRepository extends JpaRepository<Pessoa, Integer>{

	boolean existsByCpf(String cpf);
	boolean existsByEmail(String email);

	Optional<Pessoa> findByEmail(String email);
	
}
