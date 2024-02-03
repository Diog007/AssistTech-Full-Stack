package com.diogo.assistech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.diogo.assistech.domain.Cliente;
import com.diogo.assistech.domain.Pessoa;
import com.diogo.assistech.domain.dtos.ClienteDTO;
import com.diogo.assistech.repositories.ClienteRepository;
import com.diogo.assistech.repositories.PessoaRepository;
import com.diogo.assistech.services.exception.DataIntegrityViolationException;
import com.diogo.assistech.services.exception.ObjectnotFoundException;

import jakarta.validation.Valid;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;

	@Autowired
	private PessoaRepository pessoaRepository;

	@Autowired
	private BCryptPasswordEncoder encoder;

	public Cliente findById(Integer id) {
		Optional<Cliente> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id:" + id));
	}

	public List<Cliente> findAll() {
		return repository.findAll();
	}

	public Cliente create(ClienteDTO objDTO) {
		objDTO.setId(null);
		objDTO.setSenha(encoder.encode(objDTO.getSenha()));
		validaPorCpfEEmail(objDTO);
		Cliente newOBJ = new Cliente(objDTO);
		return repository.save(newOBJ);
	}

	public Cliente update(Integer id, @Valid ClienteDTO objDTO) {
		objDTO.setId(id);
		Cliente oldObj = findById(id);
		validaPorCpfEEmail(objDTO);
		oldObj = new Cliente(objDTO);
		return repository.save(oldObj);
	}

	public void delete(Integer id) {
		Cliente obj = findById(id);
		if (obj.getChamados().size() > 0) {
			throw new DataIntegrityViolationException("Cliente possui ordens de serviço e nao pode ser deletado!");
		}
		repository.deleteById(id);

	}

	private void validaPorCpfEEmail(ClienteDTO objDTO) {
		boolean cpf = pessoaRepository.existsByCpf(objDTO.getCpf());
		if(cpf){
			throw new DataIntegrityViolationException("CPF already register on system!");
		}
		boolean email = pessoaRepository.existsByEmail(objDTO.getEmail());
		if(email) {
			throw new DataIntegrityViolationException("E-Mail already register on system!");
		}
	}

}
