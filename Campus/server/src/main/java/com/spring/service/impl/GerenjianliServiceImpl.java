package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.GerenjianliMapper;
import com.spring.entity.Gerenjianli;
import com.spring.service.GerenjianliService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("GerenjianliService")
public class GerenjianliServiceImpl extends ServiceBase<Gerenjianli> implements GerenjianliService {
    @Resource
    private GerenjianliMapper dao;

    @Override
    protected GerenjianliMapper getDao() {
        return dao;
    }
}
