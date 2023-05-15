package com.example.be.dto;

import javax.validation.constraints.Digits;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

public class ProductDTO {
    private Integer id;
    @Pattern(regexp = "a-[0-9]{3}$", message = "Mã sản phẩm có định dạng a-XXX (X là số)")
    private String code;
    @Size(max = 100, message = "Tên sản phẩm không dài quá 100 ký tự")
    private String name;
    private String importedDate;
    @Positive(message = "Số lượng sản phẩm phải là số nguyên dương")
    @Digits(fraction = 0, message = "Số lượng sản phẩm phải là số nguyên", integer = 10)
    private Integer quantity;
    private ProductTypeDTO productTypeDTO;

    public ProductDTO() {
    }

    public ProductDTO(Integer id, String code, String name, String importedDate, Integer quantity, ProductTypeDTO typeProductDTO) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.importedDate = importedDate;
        this.quantity = quantity;
        this.productTypeDTO = typeProductDTO;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImportedDate() {
        return importedDate;
    }

    public void setImportedDate(String importedDate) {
        this.importedDate = importedDate;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public ProductTypeDTO getProductTypeDTO() {
        return productTypeDTO;
    }

    public void setProductTypeDTO(ProductTypeDTO productTypeDTO) {
        this.productTypeDTO = productTypeDTO;
    }
}
