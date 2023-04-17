        // 定义一个方法： serializeToJson(表单)
        function serializeToJson(form){
            var result = {}
            var f = form.serializeArray()
            // console.log(f)
            f.forEach(function(item){
                result[item.name] = item.value

            })
            // console.log(result)
            return result;
        }