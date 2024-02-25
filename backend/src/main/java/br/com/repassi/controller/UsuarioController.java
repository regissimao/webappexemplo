package br.com.repassi.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.repassi.domain.Usuario;
import br.com.repassi.service.UsuarioService;

@RestController
@RequestMapping(path="/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping(path="/{idUsuario}")
	public @ResponseBody Optional<Usuario> recuperarUsuario(@PathVariable("idUsuario") int idUsuario) {
	  return usuarioService.recuperarUsuario(idUsuario);
	}
	
	@GetMapping(path="/todos")
	public @ResponseBody Iterable<Usuario> getTodosUsuarios() {
	  return usuarioService.recuperarTodosUsuarios();
	}
	
	@PostMapping()
	public void incluirUsuario (@RequestBody Usuario user) {
	  Usuario u = new Usuario();
	  u.setNome(user.getNome());
	  u.setEmail(user.getEmail());
	  u.setDataNascimento(user.getDataNascimento());
	  usuarioService.salvarUsuario(u);
	}
	
	@PutMapping()
	public void alterarUsuario (@RequestBody Usuario user) {
	  Usuario u = new Usuario();
	  u.setId(user.getId());
	  u.setNome(user.getNome());
	  u.setEmail(user.getEmail());
	  u.setDataNascimento(user.getDataNascimento());
	  usuarioService.salvarUsuario(u);
	}
	
	@DeleteMapping(path="/{idUsuario}")
	public void removerUsuario(@PathVariable("idUsuario") int idUsuario) {
	  usuarioService.removerUsuario(idUsuario);
	}
}