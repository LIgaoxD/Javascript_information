$(function() {

	$(function() {
		$(".checkall").change(function() {
			$(".j-checkbox").prop("checked", $(this).prop("checked"));
			if ($(this).prop("checked")) {
				$(".cart-item").addClass("check-cart-item")
			} else {
				$(".cart-item").removeClass("check-cart-item")
			}
			gettotal()
		});

		$(".j-checkbox").change(function() {
			if ($(this).prop("checked")) {
				$(this).parents(".cart-item").addClass("check-cart-item")
			} else {
				$(this).parents(".cart-item").removeClass("check-cart-item")
			}
			if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
				$(".checkall").prop("checked", true)
			} else {
				$(".checkall").prop("checked", false)
			}
			gettotal()
		});

		$(".increment").click(function() {
			var n = $(this).siblings(".itxt").val()
			n++;
			$(this).siblings(".itxt").val(n)
			var p = $(this).parents(".p-num").siblings(".p-price").text()
			p = p.substr(1)
			var sum = p * n
			$(this).parents(".p-num").siblings(".p-sum").text("￥" + sum.toFixed(2))
			gettotal()
		});

		$(".decrement").click(function() {
			var n = $(this).siblings(".itxt").val()
			if (n == 1) {
				return false;
			}
			n--;
			$(this).siblings(".itxt").val(n)
			var p = $(this).parents(".p-num").siblings(".p-price").text()
			p = p.substr(1)
			var sum = p * n
			$(this).parents(".p-num").siblings(".p-sum").text("￥" + sum.toFixed(2))
			gettotal()
		});

		$(".itxt").change(function() {
			var n = $(this).val()

			var p = $(this).parents(".p-num").siblings(".p-price").text()
			p = p.substr(1)
			var sum = p * n
			$(this).parents(".p-num").siblings(".p-sum").text("￥" + sum.toFixed(2))
			gettotal()
		});


		function gettotal() {
			//计算总件数
			var count = 0;
			var item = $(".j-checkbox:checked").parents(".cart-item")
			item.find(".itxt").each(function(i, ele) {
				count += parseInt($(ele).val())

			})
			$(".amount-sum>em").text(count)
			//计算总金额
			var money = 0
			item.find(".p-sum").each(function(i, ele) {
				money += parseFloat($(ele).text().substr(1))

			});

			$(".price-sum>em").text("￥" + money.toFixed(2));
		};


		$(".p-action").click(function() {
			$(this).parents(".cart-item").remove()
			gettotal()
		})
		$(".remove-batch").click(function() {
			$(".j-checkbox:checked").parents(".cart-item").remove()
			gettotal()
		})
		$(".clear-all").click(function() {
			$(".cart-item").remove()
			gettotal()
		});


	});

});
