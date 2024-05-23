package com.diogo.assistech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.diogo.assistech.domain.Pessoa;
import com.diogo.assistech.domain.Tecnico;
import com.diogo.assistech.domain.dtos.TecnicoDTO;
import com.diogo.assistech.repositories.PessoaRepository;
import com.diogo.assistech.repositories.TecnicoRepository;
import com.diogo.assistech.services.exception.DataIntegrityViolationException;
import com.diogo.assistech.services.exception.ObjectnotFoundException;

import jakarta.validation.Valid;

@Service
public class TecnicoService {

	
	@Autowired
	private TecnicoRepository repository;

	@Autowired
	private PessoaRepository pessoaRepository;

	@Autowired
	private BCryptPasswordEncoder encoder;

	public Tecnico findById(Integer id) {
		Optional<Tecnico> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id:" + id));
	}

	public List<Tecnico> findAll() {
		return repository.findAll();
	}

	public Tecnico create(TecnicoDTO objDTO) {
		objDTO.setId(null);
		objDTO.setSenha(encoder.encode(objDTO.getSenha()));
		validaPorCpfEEmail(objDTO);
		Tecnico newOBJ = new Tecnico(objDTO);
		return repository.save(newOBJ);
	}
	
	public Tecnico update(Integer id, @Valid TecnicoDTO objDTO) {
		objDTO.setId(id);
		Tecnico oldObj = findById(id);

		if(!objDTO.getSenha().equals(oldObj.getSenha())){
			objDTO.setSenha(encoder.encode(objDTO.getSenha()));
		}

		validaPorCpfEEmail(objDTO);
		oldObj = new Tecnico(objDTO);
		return repository.save(oldObj);
	}
	
	public void delete(Integer id) {
		Tecnico obj = findById(id);
		if(obj.getChamados().size() > 0) {
			throw new DataIntegrityViolationException("Tecnico possui ordens de serviço e nao pode ser deletado!");
		}
		repository.deleteById(id);
		
	}

	private void validaPorCpfEEmail(TecnicoDTO objectDTO) {
		Optional<Pessoa> obj = pessoaRepository.findByCpf(objectDTO.getCpf());
		if(obj.isPresent() && obj.get().getId() != objectDTO.getId()){
			throw new DataIntegrityViolationException("CPF já cadastrado no sistema!");
		}
		obj = pessoaRepository.findByEmail(objectDTO.getEmail());
		if(obj.isPresent() && obj.get().getId() != objectDTO.getId()) {
			throw new DataIntegrityViolationException("E-mail já cadastrado no sistema!");
		}
	}
}
