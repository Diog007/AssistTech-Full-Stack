package com.diogo.assistech.services;

import java.util.Arrays;
import java.util.List;

import com.diogo.assistech.domain.Chamado;
import com.diogo.assistech.domain.Cliente;
import com.diogo.assistech.domain.Tecnico;
import com.diogo.assistech.domain.enums.Perfil;
import com.diogo.assistech.domain.enums.Prioridade;
import com.diogo.assistech.domain.enums.Status;
import com.diogo.assistech.repositories.ChamadoRepository;
import com.diogo.assistech.repositories.ClienteRepository;
import com.diogo.assistech.repositories.PessoaRepository;
import com.diogo.assistech.repositories.TecnicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class DBService implements CommandLineRunner {
	@Autowired
	private ClienteRepository clienteRepository;
	@Autowired
	private TecnicoRepository tecnicoRepository;
	@Autowired
	private ChamadoRepository chamadoRepository;
	@Autowired
	private PessoaRepository pessoaRepository;
	@Autowired
	private BCryptPasswordEncoder encoder;

	@Override
	public void run(String... args) throws Exception {



		Tecnico tec1 = new Tecnico(null, "Junior Pilger", "61394022042", "a@a.com.br", encoder.encode("123"));
		tec1.addPerfil(Perfil.ADMIN);

		// Criar técnicos
		Tecnico tec2 = new Tecnico(null,"John Doe", "03783764386", "john.doe@example.com", encoder.encode("123"));
		Tecnico tec3 = new Tecnico(null,"Mary Johnson", "11228847614", "mary.johnson@example.com", encoder.encode("123"));
		Tecnico tec4 = new Tecnico(null,"Robert Smith", "85752968097", "robert.smith@example.com", encoder.encode("123"));
		Tecnico tec5 = new Tecnico(null,"Jane Doe", "84445767867", "jane.doe@example.com", encoder.encode("123"));
		Tecnico tec6 = new Tecnico(null,"Michael Johnson", "62218888327", "michael.johnson@example.com", encoder.encode("123"));
		Tecnico tec7 = new Tecnico(null,"Emily Smith", "92241975583", "emily.smith@example.com", encoder.encode("123"));

		tec2.addPerfil(Perfil.TECNICO);
		tec3.addPerfil(Perfil.TECNICO);
		tec4.addPerfil(Perfil.TECNICO);
		tec5.addPerfil(Perfil.TECNICO);
		tec6.addPerfil(Perfil.TECNICO);
		tec7.addPerfil(Perfil.TECNICO);

		tecnicoRepository.saveAll(List.of(tec1, tec2, tec3, tec4, tec5, tec6, tec7));

		// Criar clientes
		Cliente cus1 = new Cliente(null,"Linus Torvalds", "14178441590", "linux@linux.com.br", encoder.encode("123"));
		Cliente cus2 = new Cliente(null,"Alice Johnson", "36562882168", "alice.johnson@example.com", encoder.encode("123"));
		Cliente cus3 = new Cliente(null,"David Smith", "38322565399", "david.smith@example.com", encoder.encode("123"));
		Cliente cus4 = new Cliente(null,"Sarah Doe", "61317166337", "sarah.doe@example.com", encoder.encode("123"));
		Cliente cus5 = new Cliente(null,"Robert Johnson", "21466730790", "robert.johnson@example.com", encoder.encode("123"));
		Cliente cus6 = new Cliente(null,"Emily Davis", "82987592736", "emily.davis@example.com", encoder.encode("123"));
		// Customer cus7 = new Customer("Daniel Smith", "99988877766", "daniel.smith@example.com", "789");

		clienteRepository.saveAll(List.of(cus1, cus2, cus3, cus4, cus5, cus6));

// Criar tickets
		Chamado t1 = new Chamado(null, Prioridade.MEDIA, Status.ABERTO, "Ticket 01", "Primeiro chamado", tec1, cus1);
		Chamado t2 = new Chamado(null, Prioridade.MEDIA, Status.ABERTO, "Ticket 02", "Segundo chamado", tec2, cus2);
		Chamado t3 = new Chamado(null, Prioridade.MEDIA, Status.ABERTO, "Ticket 03", "Terceiro chamado", tec3, cus3);
		Chamado t4 = new Chamado(null, Prioridade.MEDIA, Status.ABERTO, "Ticket 04", "Quarto chamado", tec4, cus4);
		Chamado t5 = new Chamado(null, Prioridade.MEDIA, Status.ABERTO, "Ticket 05", "Quinto chamado", tec5, cus5);
		Chamado t6 = new Chamado(null, Prioridade.MEDIA, Status.ABERTO, "Ticket 06", "Sexto chamado", tec6, cus6);
		Chamado t7 = new Chamado(null, Prioridade.MEDIA, Status.ABERTO, "Ticket 07", "Sétimo chamado", tec7, cus6);


		chamadoRepository.saveAll(List.of(t1, t2, t3, t4, t5, t6, t7));

	}



}
