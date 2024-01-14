package com.diogo.assistech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diogo.assistech.domain.Chamado;
import com.diogo.assistech.repositories.ChamadoRepository;
import com.diogo.assistech.services.exception.ObjectnotFoundException;

@Service
public class ChamadoService {

	@Autowired
	private ChamadoRepository repository;
	
	public Chamado findById(Integer id) {
		Optional<Chamado> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! ID:" + id));
	}

	public List<Chamado> findAll() {
		return repository.findAll();
		
	}
	
	
}
