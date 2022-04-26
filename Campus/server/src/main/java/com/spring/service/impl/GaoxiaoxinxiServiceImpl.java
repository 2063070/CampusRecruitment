package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.GaoxiaoxinxiMapper;
import com.spring.entity.Gaoxiaoxinxi;
import com.spring.service.GaoxiaoxinxiService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("GaoxiaoxinxiService")
public class GaoxiaoxinxiServiceImpl extends ServiceBase<Gaoxiaoxinxi> implements GaoxiaoxinxiService {
    @Resource
    private GaoxiaoxinxiMapper dao;

    @Override
    protected GaoxiaoxinxiMapper getDao() {
        return dao;
    }
}
