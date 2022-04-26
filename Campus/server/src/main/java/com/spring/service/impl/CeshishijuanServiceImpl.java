package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.CeshishijuanMapper;
import com.spring.entity.Ceshishijuan;
import com.spring.service.CeshishijuanService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("CeshishijuanService")
public class CeshishijuanServiceImpl extends ServiceBase<Ceshishijuan> implements CeshishijuanService {
    @Resource
    private CeshishijuanMapper dao;

    @Override
    protected CeshishijuanMapper getDao() {
        return dao;
    }
}
