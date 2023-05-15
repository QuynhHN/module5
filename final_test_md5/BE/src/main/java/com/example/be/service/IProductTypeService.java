package com.example.be.service;

import com.example.be.dto.ProductTypeDTO;

import java.util.List;

public interface IProductTypeService {
    List<ProductTypeDTO> findAll();
}
