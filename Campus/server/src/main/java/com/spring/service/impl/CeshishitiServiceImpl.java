package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.CeshishitiMapper;
import com.spring.entity.Ceshishiti;
import com.spring.service.CeshishitiService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("CeshishitiService")
public class CeshishitiServiceImpl extends ServiceBase<Ceshishiti> implements CeshishitiService {
    @Resource
    private CeshishitiMapper dao;

    @Override
    protected CeshishitiMapper getDao() {
        return dao;
    }
}
