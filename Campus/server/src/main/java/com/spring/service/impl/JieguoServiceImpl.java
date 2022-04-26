package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.JieguoMapper;
import com.spring.entity.Jieguo;
import com.spring.service.JieguoService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("JieguoService")
public class JieguoServiceImpl extends ServiceBase<Jieguo> implements JieguoService {
    @Resource
    private JieguoMapper dao;

    @Override
    protected JieguoMapper getDao() {
        return dao;
    }
}
