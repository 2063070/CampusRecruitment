package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.DiaochawenjuanMapper;
import com.spring.entity.Diaochawenjuan;
import com.spring.service.DiaochawenjuanService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("DiaochawenjuanService")
public class DiaochawenjuanServiceImpl extends ServiceBase<Diaochawenjuan> implements DiaochawenjuanService {
    @Resource
    private DiaochawenjuanMapper dao;

    @Override
    protected DiaochawenjuanMapper getDao() {
        return dao;
    }
}
