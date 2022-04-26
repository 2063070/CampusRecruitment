package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.CeshichengjiMapper;
import com.spring.entity.Ceshichengji;
import com.spring.service.CeshichengjiService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("CeshichengjiService")
public class CeshichengjiServiceImpl extends ServiceBase<Ceshichengji> implements CeshichengjiService {
    @Resource
    private CeshichengjiMapper dao;

    @Override
    protected CeshichengjiMapper getDao() {
        return dao;
    }
}
