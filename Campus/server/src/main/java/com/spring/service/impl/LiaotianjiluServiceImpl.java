package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.LiaotianjiluMapper;
import com.spring.entity.Liaotianjilu;
import com.spring.service.LiaotianjiluService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("LiaotianjiluService")
public class LiaotianjiluServiceImpl extends ServiceBase<Liaotianjilu> implements LiaotianjiluService {
    @Resource
    private LiaotianjiluMapper dao;

    @Override
    protected LiaotianjiluMapper getDao() {
        return dao;
    }
}
