package com.bytecode.proyecto.Controller;

import com.bytecode.proyecto.Document.Comentario;
import com.bytecode.proyecto.Document.Post;
import com.bytecode.proyecto.RestRepository.PostRep;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin()
public class PostController {
    @Autowired
    private PostRep postRep;

    @GetMapping("/posts/")
    public List<Post> findAll(){
        return postRep.finaAll();
    }

    @PostMapping("/posts")
    public Post save(@RequestBody Post post){
        return postRep.save(post);
    }

    @PostMapping("/posts/{idPost}/addcomment")
    public UpdateResult addComment(@PathVariable("idPost") String idPost, @RequestBody Comentario comentario){
        return postRep.addComment(idPost, comentario);
    }

    @GetMapping("/post/{idPost}")
    public Post find(@PathVariable("idPost") String idPost){
        return postRep.find(idPost);
    }

    @GetMapping("/post/search/{serachPost}")
    public List<Post> search(@PathVariable("serachPost") String serachPost){
        return postRep.search(serachPost);
    }
}
