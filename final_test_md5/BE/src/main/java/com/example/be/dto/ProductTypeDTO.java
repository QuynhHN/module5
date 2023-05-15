package com.example.be.dto;

import java.util.Set;

public class ProductTypeDTO {
    private Integer id;
    private String nameType;
    private Set<ProductDTO> productDTOSet;

    public ProductTypeDTO() {
    }

    public ProductTypeDTO(Integer id, String nameType, Set<ProductDTO> productDTOSet) {
        this.id = id;
        this.nameType = nameType;
        this.productDTOSet = productDTOSet;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }

    public Set<ProductDTO> getProductDTOSet() {
        return productDTOSet;
    }

    public void setProductDTOSet(Set<ProductDTO> productDTOSet) {
        this.productDTOSet = productDTOSet;
    }
}
