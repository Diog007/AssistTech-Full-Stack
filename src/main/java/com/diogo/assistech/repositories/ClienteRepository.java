package com.diogo.assistech.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diogo.assistech.domain.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

}
