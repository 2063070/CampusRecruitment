package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.ShitiMapper;
import com.spring.entity.Shiti;
import com.spring.service.ShitiService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("ShitiService")
public class ShitiServiceImpl extends ServiceBase<Shiti> implements ShitiService {
    @Resource
    private ShitiMapper dao;

    @Override
    protected ShitiMapper getDao() {
        return dao;
    }
}
