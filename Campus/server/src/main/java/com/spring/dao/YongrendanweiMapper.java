package com.spring.dao;

import com.base.MapperBase;
import com.spring.entity.Yongrendanwei;

import org.springframework.stereotype.Repository;


@Repository
public interface YongrendanweiMapper extends MapperBase<Yongrendanwei> {
    Yongrendanwei login(Yongrendanwei yongrendanwei);
}
