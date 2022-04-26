package com.spring.service.impl;

import com.base.ServiceBase;
import com.spring.dao.MianshitongzhiMapper;
import com.spring.entity.Mianshitongzhi;
import com.spring.service.MianshitongzhiService;
import org.springframework.stereotype.Service;
import util.Info;

import javax.annotation.Resource;

@Service("MianshitongzhiService")
public class MianshitongzhiServiceImpl extends ServiceBase<Mianshitongzhi> implements MianshitongzhiService {
    @Resource
    private MianshitongzhiMapper dao;

    @Override
    protected MianshitongzhiMapper getDao() {
        return dao;
    }
}
