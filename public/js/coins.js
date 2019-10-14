
function viewCoin(coin_id) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:777/api/coin/' + coin_id,
        success: function(data) {
            $("#ViewCoins input[name=name]").val(data.coins.name);
            $("#ViewCoins input[name=market_cap]").val(data.coins.market_cap);
            $("#ViewCoins input[name=price]").val(data.coins.price);
            $("#ViewCoins input[name=volume_24h]").val(data.coins.volume_24h);
            $("#ViewCoins input[name=percent_change_24h]").val(data.coins.percent_change_24h);
            $('#coinsViewModal').modal('show');
        },
        error: function(data) {
            console.log(data);
        }
    });



}
