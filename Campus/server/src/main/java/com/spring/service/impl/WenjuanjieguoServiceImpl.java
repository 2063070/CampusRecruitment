package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.WenjuanjieguoMapper;
import com.spring.entity.Wenjuanjieguo;
import com.spring.service.WenjuanjieguoService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("WenjuanjieguoService")
public class WenjuanjieguoServiceImpl extends ServiceBase<Wenjuanjieguo> implements WenjuanjieguoService {
    @Resource
    private WenjuanjieguoMapper dao;

    @Override
    protected WenjuanjieguoMapper getDao() {
        return dao;
    }
}
