package com.spring.dao;

import com.base.MapperBase;
import com.spring.entity.Gaoxiaoguanliyuan;

import org.springframework.stereotype.Repository;


@Repository
public interface GaoxiaoguanliyuanMapper extends MapperBase<Gaoxiaoguanliyuan> {
    Gaoxiaoguanliyuan login(Gaoxiaoguanliyuan gaoxiaoguanliyuan);
}
