<?php
// +----------------------------------------------------------------------
// | likeshop开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  likeshop系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | likeshop团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeshop.cn.team
// +----------------------------------------------------------------------

namespace app\adminapi\validate\decorate;


use app\common\enum\MenuEnum;
use app\common\model\decorate\Menu;
use app\common\validate\BaseValidate;

/**
 * 菜单验证
 * Class MenuValidate
 * @package app\adminapi\validate\decorate
 */
class MenuValidate extends BaseValidate
{
    protected $rule = [
        'id' => 'require|checkId',
        'name' => 'require|checkName',
        'link_type' => 'require|in:1,2,3',
        'link_address' => 'require|checkAddresss',
        'sort' => 'number|max:5',
        'status' => 'require|in:0,1',
    ];

    protected $message = [
        'id.require' => '参数错误',
        'name.require' => '请输入菜单名称',
        'link_type.require' => '请选择链接类型',
        'link_type.in' => '连接类型取值范围在[1,2,3]',
        'link_address.require' => '请选择链接地址',
        'sort.number' => '排序必须为纯数字',
        'sort.max' => '排序最大值不能超过五位数',
        'status.require' => '请选择菜单状态',
        'status.in' => '菜单状态取值范围在[0,1]',
    ];

    public function sceneAdd()
    {
        return $this->only(['name','link_type','link_address','sort','status']);
    }

    public function sceneDetail()
    {
        return $this->only(['id']);
    }

    public function sceneEdit()
    {
        return $this->only(['id','name','link_type','link_address','sort','status']);
    }

    public function sceneStatus()
    {
        return $this->only(['id','status']);
    }

    public function sceneDel()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 检验菜单id
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author ljj
     * @date 2022/2/14 3:02 下午
     */
    public function checkId($value,$rule,$data)
    {
        $result = Menu::where('id',$value)->findOrEmpty();
        if ($result->isEmpty()) {
            return '菜单不存在';
        }
        return true;
    }

    /**
     * @notes 检验菜单名称
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author ljj
     * @date 2022/2/14 2:59 下午
     */
    public function checkName($value,$rule,$data)
    {
        $where[] = ['name','=',$value];
        if (isset($data['id'])) {
            $where[] = ['id','<>',$data['id']];
        }
        $result = Menu::where($where)->findOrEmpty();
        if (!$result->isEmpty()) {
            return '菜单名称已存在，请重新输入';
        }
        return true;
    }

    /**
     * @notes 检验链接地址
     * @param $value
     * @param $rule
     * @param $data
     * @return bool|string
     * @author ljj
     * @date 2022/2/14 3:27 下午
     */
    public function checkAddresss($value,$rule,$data)
    {
        if ($data['link_type'] == MenuEnum::LINK_SHOP) {
            $shop_page = array_column(MenuEnum::SHOP_PAGE,NULL,'index');
            if (!isset($shop_page[$data['link_address']])) {
                return '商城页面不存在该链接，请重新选择';
            }
        }

        return true;
    }
}