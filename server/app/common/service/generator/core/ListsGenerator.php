<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

declare(strict_types=1);

namespace app\common\service\generator\core;


/**
 * 列表生成器
 * Class ListsGenerator
 * @package app\common\service\generator\core
 */
class ListsGenerator extends BaseGenerator implements GenerateInterface
{


    /**
     * @notes 替换变量
     * @return mixed|void
     * @author 段誉
     * @date 2022/6/22 18:12
     */
    public function replaceVariables()
    {
        // 需要替换的变量
        $needReplace = [
            '{NAMESPACE}',
            '{USE}',
            '{CLASS_COMMENT}',
            '{UPPER_CAMEL_NAME}',
            '{MODULE_NAME}',
            '{PACKAGE_NAME}',
            '{EXTENDS_LISTS}',
            '{PK}',
            '{QUERY_CONDITION}',
            '{FIELD_DATA}'
        ];

        // 等待替换的内容
        $waitReplace = [
            $this->getNameSpaceContent(),
            $this->getUseContent(),
            $this->getClassCommentContent(),
            $this->getUpperCamelName(),
            $this->moduleName,
            $this->getPackageNameContent(),
            $this->getExtendsListsContent(),
            $this->getPkContent(),
            $this->getQueryConditionContent(),
            $this->getFieldDataContent(),
        ];

        $templatePath = $this->getTemplatePath('lists');

        // 替换内容
        $content = str_replace($needReplace, $waitReplace, file_get_contents($templatePath));

        $this->setContent($content);
    }


    /**
     * @notes 获取命名空间内容
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:12
     */
    public function getNameSpaceContent()
    {
        if (!empty($this->classDir)) {
            return "namespace app\\" . $this->moduleName . "\\lists\\" . $this->classDir . ';';
        }
        return "namespace app\\" . $this->moduleName . "\\lists;";
    }


    /**
     * @notes 获取use内容
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:12
     */
    public function getUseContent()
    {
        if ($this->moduleName == 'adminapi') {
            $tpl = "use app\\" . $this->moduleName . "\\lists\\BaseAdminDataLists;" . PHP_EOL;
        } else {
            $tpl = "use app\\common\\lists\\BaseDataLists;" . PHP_EOL;
        }

        if (!empty($this->classDir)) {
            $tpl .= "use app\\common\\model\\" . $this->classDir . "\\" . $this->getUpperCamelName() . ';';
        } else {
            $tpl .= "use app\\common\\model\\" . $this->getUpperCamelName() . ';';
        }

        return $tpl;
    }


    /**
     * @notes 获取类描述
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:12
     */
    public function getClassCommentContent()
    {
        if (!empty($this->tableData['class_comment'])) {
            $tpl = $this->tableData['class_comment'] . '列表';
        } else {
            $tpl = $this->getUpperCamelName() . '列表';
        }
        return $tpl;
    }


    /**
     * @notes 获取包名
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:12
     */
    public function getPackageNameContent()
    {
        return !empty($this->classDir) ? $this->classDir : '';
    }


    /**
     * @notes 获取继承控制器
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:12
     */
    public function getExtendsListsContent()
    {
        $tpl = 'BaseAdminDataLists';
        if ($this->moduleName != 'adminapi') {
            $tpl = 'BaseDataLists';
        }
        return $tpl;
    }


    /**
     * @notes 获取查询条件内容
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:12
     */
    public function getQueryConditionContent()
    {
        $columnQuery = array_column($this->tableColumn, 'query_type');
        $query = array_unique($columnQuery);

        $conditon = '';
        foreach ($query as $queryName) {
            $columnValue = '';
            foreach ($this->tableColumn as $column) {
                if ($queryName == $column['query_type']) {
                    $columnValue .= "'" . $column['column_name'] . "', ";
                }
            }
            if (!empty($columnValue)) {
                $columnValue = substr($columnValue, 0, -2);
                $conditon .= "'$queryName' => [" . trim($columnValue) . "]," . PHP_EOL;
            }
        }

        $content = substr($conditon, 0, -1);
        return $this->setBlankSpace($content, "            ");
    }


    /**
     * @notes 获取查询字段
     * @return false|string
     * @author 段誉
     * @date 2022/6/22 18:13
     */
    public function getFieldDataContent()
    {
        $content = '';
        foreach ($this->tableColumn as $column) {
            if ($column['is_lists']) {
                $content .= "'" . $column['column_name'] . "', ";
            }
        }
        if (empty($content)) {
            return $content;
        }
        $content = substr($content, 0, -2);
        return $content;
    }


    /**
     * @notes 获取文件生成到模块的文件夹路径
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:13
     */
    public function getModuleGenerateDir()
    {
        $dir = $this->basePath . $this->moduleName . '/lists/';
        $this->checkDir($dir);
        if (!empty($this->classDir)) {
            $dir .= $this->classDir . '/';
            $this->checkDir($dir);
        }
        return $dir;
    }


    /**
     * @notes 获取文件生成到runtime的文件夹路径
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:13
     */
    public function getRuntimeGenerateDir()
    {
        $dir = $this->generatorDir . 'php/app/' . $this->moduleName . '/lists/';
        $this->checkDir($dir);
        if (!empty($this->classDir)) {
            $dir .= $this->classDir . '/';
            $this->checkDir($dir);
        }
        return $dir;
    }


    /**
     * @notes  生成的文件名
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:13
     */
    public function getGenerateName()
    {
        return $this->getUpperCamelName() . 'Lists.php';
    }


    // 预览文件
    public function preview()
    {
    }


}