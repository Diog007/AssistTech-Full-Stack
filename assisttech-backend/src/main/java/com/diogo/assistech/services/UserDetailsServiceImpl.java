package com.diogo.assistech.services;

import com.diogo.assistech.domain.Pessoa;
import com.diogo.assistech.domain.dtos.RegisterDTO;
import com.diogo.assistech.repositories.PessoaRepository;
import com.diogo.assistech.security.UserSS;
import com.diogo.assistech.services.exception.DataIntegrityViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private final PessoaRepository repository;

    public UserDetailsServiceImpl(PessoaRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Pessoa> user = repository.findByEmail(email);
        if(user.isPresent()){
            return new UserSS(user.get().getId(), user.get().getEmail(), user.get().getSenha(), user.get().getPerfis());
        }
        throw new UsernameNotFoundException("Usuário não encontrado com email:" + email);
    }


    public void register(RegisterDTO user) {
        if(this.repository.findByEmail(user.email()).isPresent()){
            throw new DataIntegrityViolationException("Já existe um usúario com este email! ");
        }
        if(this.repository.findByCpf(user.cpf()).isPresent()){
            throw new DataIntegrityViolationException("Já existe um usúario com este CPF!");
        }
        String encrypti = new BCryptPasswordEncoder().encode(user.senha());
        Pessoa pessoa = new Pessoa(user.nome(), user.cpf(), user.email(), encrypti);
        repository.save(pessoa);

    }
}
