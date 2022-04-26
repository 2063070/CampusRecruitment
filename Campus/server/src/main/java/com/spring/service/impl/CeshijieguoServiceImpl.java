package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.CeshijieguoMapper;
import com.spring.entity.Ceshijieguo;
import com.spring.service.CeshijieguoService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("CeshijieguoService")
public class CeshijieguoServiceImpl extends ServiceBase<Ceshijieguo> implements CeshijieguoService {
    @Resource
    private CeshijieguoMapper dao;

    @Override
    protected CeshijieguoMapper getDao() {
        return dao;
    }
}
