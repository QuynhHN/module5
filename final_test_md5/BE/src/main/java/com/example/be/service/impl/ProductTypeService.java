package com.example.be.service.impl;

import com.example.be.dto.ProductTypeDTO;
import com.example.be.model.ProductType;
import com.example.be.repository.IProductTypeRepository;
import com.example.be.service.IProductTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeRepository iProductTypeRepository;

    @Override
    public List<ProductTypeDTO> findAll() {
        List<ProductType> productTypeList = iProductTypeRepository.findAllProductTypes();
        List<ProductTypeDTO> productTypeDTOList = new ArrayList<>();
        ProductTypeDTO productTypeDTO;
        for (ProductType productType: productTypeList) {
            productTypeDTO = new ProductTypeDTO();
            BeanUtils.copyProperties(productType, productTypeDTO);
            productTypeDTOList.add(productTypeDTO);
        }
        return productTypeDTOList;
    }

}
