package com.gestaokids.controller;

import com.gestaokids.dto.ChildDTO;
import com.gestaokids.service.ChildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/children")
@CrossOrigin(origins = "*")
public class ChildController {
    
    @Autowired
    private ChildService childService;
    
    @GetMapping("/parent/{parentId}")
    public ResponseEntity<List<ChildDTO>> getChildrenByParentId(@PathVariable Long parentId) {
        try {
            List<ChildDTO> children = childService.getChildrenByParentId(parentId);
            return ResponseEntity.ok(children);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ChildDTO> getChildById(@PathVariable Long id) {
        try {
            ChildDTO child = childService.getChildById(id);
            return ResponseEntity.ok(child);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<ChildDTO> createChild(@Valid @RequestBody ChildDTO childDTO) {
        try {
            ChildDTO createdChild = childService.createChild(childDTO);
            return ResponseEntity.ok(createdChild);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ChildDTO> updateChild(@PathVariable Long id, @Valid @RequestBody ChildDTO childDTO) {
        try {
            ChildDTO updatedChild = childService.updateChild(id, childDTO);
            return ResponseEntity.ok(updatedChild);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChild(@PathVariable Long id) {
        try {
            childService.deleteChild(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
