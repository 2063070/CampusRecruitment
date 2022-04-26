package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.MianshijieguoMapper;
import com.spring.entity.Mianshijieguo;
import com.spring.service.MianshijieguoService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("MianshijieguoService")
public class MianshijieguoServiceImpl extends ServiceBase<Mianshijieguo> implements MianshijieguoService {
    @Resource
    private MianshijieguoMapper dao;

    @Override
    protected MianshijieguoMapper getDao() {
        return dao;
    }
}
