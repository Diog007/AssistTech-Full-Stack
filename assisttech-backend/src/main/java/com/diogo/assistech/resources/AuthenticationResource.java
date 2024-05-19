package com.diogo.assistech.resources;


import com.diogo.assistech.domain.dtos.CredenciaisDTO;
import com.diogo.assistech.domain.dtos.LoginResponseDTO;
import com.diogo.assistech.security.TokenService;
import com.diogo.assistech.security.UserSS;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/auth")
public class AuthenticationResource {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid CredenciaisDTO credentialDTO) {

        var usernamePassword = new UsernamePasswordAuthenticationToken(credentialDTO.getEmail(), credentialDTO.getSenha());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((UserSS) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDTO(token));
    }
}
