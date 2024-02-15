package br.com.repassi.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.repassi.domain.Usuario;

public interface UsuarioRepositorio extends CrudRepository<Usuario, Integer> {
    //TESTE
}