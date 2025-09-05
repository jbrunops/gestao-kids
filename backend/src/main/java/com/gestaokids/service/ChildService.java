package com.gestaokids.service;

import com.gestaokids.dto.ChildDTO;
import com.gestaokids.model.Child;
import com.gestaokids.model.User;
import com.gestaokids.repository.ChildRepository;
import com.gestaokids.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ChildService {
    
    @Autowired
    private ChildRepository childRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    public List<ChildDTO> getChildrenByParentId(Long parentId) {
        List<Child> children = childRepository.findByParentId(parentId);
        return children.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public ChildDTO getChildById(Long id) {
        Child child = childRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Child not found with id: " + id));
        return convertToDTO(child);
    }
    
    public ChildDTO createChild(ChildDTO childDTO) {
        User parent = userRepository.findById(childDTO.getParentId())
                .orElseThrow(() -> new RuntimeException("Parent not found with id: " + childDTO.getParentId()));
        
        Child child = new Child();
        child.setName(childDTO.getName());
        child.setAge(childDTO.getAge());
        child.setAvatar(childDTO.getAvatar());
        child.setAllowStudy(childDTO.getAllowStudy());
        child.setAllowFun(childDTO.getAllowFun());
        child.setStudyTimeToday(childDTO.getStudyTimeToday());
        child.setFunTimeToday(childDTO.getFunTimeToday());
        child.setParent(parent);
        
        child = childRepository.save(child);
        return convertToDTO(child);
    }
    
    public ChildDTO updateChild(Long id, ChildDTO childDTO) {
        Child child = childRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Child not found with id: " + id));
        
        child.setName(childDTO.getName());
        child.setAge(childDTO.getAge());
        child.setAvatar(childDTO.getAvatar());
        child.setAllowStudy(childDTO.getAllowStudy());
        child.setAllowFun(childDTO.getAllowFun());
        child.setStudyTimeToday(childDTO.getStudyTimeToday());
        child.setFunTimeToday(childDTO.getFunTimeToday());
        
        child = childRepository.save(child);
        return convertToDTO(child);
    }
    
    public void deleteChild(Long id) {
        if (!childRepository.existsById(id)) {
            throw new RuntimeException("Child not found with id: " + id);
        }
        childRepository.deleteById(id);
    }
    
    private ChildDTO convertToDTO(Child child) {
        ChildDTO dto = new ChildDTO();
        dto.setId(child.getId());
        dto.setName(child.getName());
        dto.setAge(child.getAge());
        dto.setAvatar(child.getAvatar());
        dto.setAllowStudy(child.getAllowStudy());
        dto.setAllowFun(child.getAllowFun());
        dto.setStudyTimeToday(child.getStudyTimeToday());
        dto.setFunTimeToday(child.getFunTimeToday());
        dto.setParentId(child.getParent().getId());
        return dto;
    }
}
