package br.com.repassi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.repassi.domain.Usuario;
import br.com.repassi.repository.UsuarioRepositorio;

@Controller
@RequestMapping(path="/usuario")
public class UsuarioControle {

	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	@GetMapping(path="/todos")
	public @ResponseBody Iterable<Usuario> getTodosUsuarios() {
	  // This returns a JSON or XML with the usuarios
	  return usuarioRepositorio.findAll();
	}
	
	@PostMapping(path="/incluir") // Map ONLY POST Requests
	public @ResponseBody String incluirUsario (@RequestParam String nome) {
	  // @ResponseBody means the returned String is the response, not a view name
	  // @RequestParam means it is a parameter from the GET or POST request

	  Usuario u = new Usuario();
	  u.setNome(nome);
	  usuarioRepositorio.save(u);
	  return "Saved";
	}
}
