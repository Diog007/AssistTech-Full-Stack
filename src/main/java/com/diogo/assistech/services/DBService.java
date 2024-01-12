package com.diogo.assistech.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.diogo.assistech.domain.Chamado;
import com.diogo.assistech.domain.Cliente;
import com.diogo.assistech.domain.Tecnico;
import com.diogo.assistech.domain.enums.Perfil;
import com.diogo.assistech.domain.enums.Prioridade;
import com.diogo.assistech.domain.enums.Status;
import com.diogo.assistech.repositories.ChamadoRepository;
import com.diogo.assistech.repositories.ClienteRepository;
import com.diogo.assistech.repositories.TecnicoRepository;

@Service
public class DBService {
	
	@Autowired
	private TecnicoRepository tecnicoRepository;
	@Autowired
	private ClienteRepository clienteRepository;
	@Autowired
	private ChamadoRepository chamadoRepository;

	@Bean
	public void instanciaDB() {
		Tecnico tec1 = new Tecnico(null, "Diogo nascimento", "50291291899", "diogo@mail.com", "123");
		tec1.addPerfil(Perfil.ADMIN);
		
		Cliente cli1 = new Cliente(null, "Linus Torvalds", "80527954780", "torvals@mail.com", "123");
		
		Chamado c1 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 01", "Primeiro chamado", tec1, cli1);
		
		tecnicoRepository.saveAll(Arrays.asList(tec1));
		clienteRepository.saveAll(Arrays.asList(cli1));
		chamadoRepository.saveAll(Arrays.asList(c1));
	}
	
}
