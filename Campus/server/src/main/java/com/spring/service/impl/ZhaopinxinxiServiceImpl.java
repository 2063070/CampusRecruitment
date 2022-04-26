package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.ZhaopinxinxiMapper;
import com.spring.entity.Zhaopinxinxi;
import com.spring.service.ZhaopinxinxiService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("ZhaopinxinxiService")
public class ZhaopinxinxiServiceImpl extends ServiceBase<Zhaopinxinxi> implements ZhaopinxinxiService {
    @Resource
    private ZhaopinxinxiMapper dao;

    @Override
    protected ZhaopinxinxiMapper getDao() {
        return dao;
    }
}
