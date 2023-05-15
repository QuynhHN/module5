package com.example.be.service.impl;

import com.example.be.dto.ProductDTO;
import com.example.be.repository.IProductRepository;
import com.example.be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Page<ProductDTO> findAll(String name, String productTypeId, Pageable pageable) {
        return null;
    }

    @Override
    public void save(ProductDTO productDTO) {

    }

    @Override
    public void delete(Integer id) {

    }

    @Override
    public ProductDTO findById(Integer id) {
        return null;
    }

    @Override
    public void update(ProductDTO productDTO) {

    }
}
