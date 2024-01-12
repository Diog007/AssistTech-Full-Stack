package com.diogo.assistech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diogo.assistech.domain.Tecnico;
import com.diogo.assistech.domain.dtos.TecnicoDTO;
import com.diogo.assistech.repositories.TecnicoRepository;
import com.diogo.assistech.services.exception.ObjectnotFoundException;

@Service
public class TecnicoService {

	@Autowired
	private TecnicoRepository repository;
	
	
	public Tecnico findById(Integer id) {
		Optional<Tecnico> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id:" + id));
	}


	public List<Tecnico> findAll() {
		return repository.findAll();
	}


	public Tecnico create(TecnicoDTO objDTO) {
		objDTO.setId(null);
		Tecnico newOBJ = new Tecnico(objDTO);
		return repository.save(newOBJ);
	}
	
}
