// ------------------------------------------------------------------------
// 版权信息
// 版权归百小僧及百签科技（广东）有限公司所有。
// 所有权利保留。
// 官方网站：https://baiqian.com
//
// 许可证信息
// Furion 项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。
// 许可证的完整文本可以在源代码树根目录中的 LICENSE-APACHE 和 LICENSE-MIT 文件中找到。
// 官方网站：https://furion.net
//
// 使用条款
// 使用本代码应遵守相关法律法规和许可证的要求。
//
// 免责声明
// 对于因使用本代码而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担任何责任。
//
// 其他重要信息
// Furion 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。
// 有关 Furion 项目的其他详细信息，请参阅位于源代码树根目录中的 COPYRIGHT 和 DISCLAIMER 文件。
//
// 更多信息
// 请访问 https://gitee.com/dotnetchina/Furion 获取更多关于 Furion 项目的许可证和版权信息。
// ------------------------------------------------------------------------

using Furion.DynamicApiController;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Furion.SpecificationDocument;

/// <summary>
/// 标签文档排序/注释拦截器
/// </summary>
[SuppressSniffer]
public class TagsOrderDocumentFilter : IDocumentFilter
{
    /// <summary>
    /// 配置拦截
    /// </summary>
    /// <param name="swaggerDoc"></param>
    /// <param name="context"></param>
    public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
    {
        foreach (var apiDescription in context.ApiDescriptions)
        {
            var actionDescriptor = apiDescription.ActionDescriptor as ControllerActionDescriptor;

            var controllerName = actionDescriptor.ControllerName;
            var controllerTag = SpecificationDocumentBuilder.GetControllerTag(actionDescriptor);

            // 修正自定义 Tag 不能实现注释问题
            if (controllerName != controllerTag)
            {
                var tag = swaggerDoc.Tags.FirstOrDefault(u => u.Name == controllerName);
                if (tag != null)
                {
                    tag.Name = controllerTag;
                }
            }
        }

        swaggerDoc.Tags = swaggerDoc.Tags
                                    .OrderByDescending(u => GetTagOrder(u.Name))
                                    .ThenBy(u => u.Name)
                                    .ToArray();
    }

    /// <summary>
    /// 获取标签排序
    /// </summary>
    /// <param name="tag"></param>
    /// <returns></returns>
    private static int GetTagOrder(string tag)
    {
        var isExist = Penetrates.ControllerOrderCollection.TryGetValue(tag, out var order);
        return isExist ? order.Item2 : default;
    }
}