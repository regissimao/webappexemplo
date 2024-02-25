package br.com.repassi.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.repassi.domain.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
    //TESTE2
}