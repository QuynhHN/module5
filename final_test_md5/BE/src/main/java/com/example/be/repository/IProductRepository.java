package com.example.be.repository;

import com.example.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select * from product where name like concat('%', :name, '%') " +
            "and book_type_id like concat('%', :id, '%')", nativeQuery = true)
    Page<Product> findAllProducts(@Param("name") String name, @Param("id") String productTypeId, Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "insert into product (code, imported_date, `name`, quantity, product_type_id) " +
            "values (:code, :importedDate, :name, :quantity, :bookTypeId)", nativeQuery = true)
    void addProduct (@Param("code") String code,
                  @Param("importedDate") String importedDate,
                  @Param("name") String name,
                  @Param("quantity") Integer quantity,
                  @Param("bookTypeId") Integer productTypeId);

    @Modifying
    @Transactional
    @Query(value = "delete from product where id = :id", nativeQuery = true)
    void deleteProduct(@Param("id") Integer id);

    @Query(value = "select * from book where id = :id", nativeQuery = true)
    Product findProductWithId(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "update product set code = :code, name = :name, imported_date = :importedDate, " +
            "quantity = :quantity, product_type_id = :bookTypeId where id = :id", nativeQuery = true)
    void updateProduct(@Param("code") String code,
                    @Param("importedDate") String importedDate,
                    @Param("name") String name,
                    @Param("quantity") Integer quantity,
                    @Param("productTypeId") Integer productTypeId,
                    @Param("id") Integer id);
}
