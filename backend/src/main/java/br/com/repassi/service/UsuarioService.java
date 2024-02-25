package br.com.repassi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.repassi.domain.Usuario;
import br.com.repassi.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	public Optional<Usuario> recuperarUsuario(int idUsuario) {
		return usuarioRepository.findById(idUsuario);
	}
	
	public Iterable<Usuario> recuperarTodosUsuarios() {
	  return usuarioRepository.findAll();
	}
	
	public void salvarUsuario (Usuario usuario) {
	  usuarioRepository.save(usuario);
	}
	
	public void removerUsuario (int idUsuario) {
	  usuarioRepository.deleteById(idUsuario);
	}
}
