let userRepository = {}

let users = [
    {
        id: 1,
        name: 'User A',
        authorization: 'VijiceSC9MqpZrNcA3QXFuWlJtrNPR3WiwivOYUjmZnekwcH3gMfvEkd4wYZcuSyrf44LgrqP7yqZ056DM4CBbFtKWZQ1F2WLIWttC4',
        deviceToken: 'pg056DM4CBbFtKWZQ1F2WLIWt9et6hB2pDvnd7y4mOxAOH1s1zi6VE4Bj5EkT1be2JiSRvhThl2UHJqVi',
        fingerPrint: '123456789'
    },
    {
        id: 2,
        name: 'User B',
        authorization: 'ZrNcA3QXFuWlJtrNPR3WiwivOYVijiceSC9MqpUjmZnekwcH3gMf056DM4CBbFtKWZQ1F2WLIWttC4vEkd4wYZcuSyrf44LgrqP7yqZ',
        deviceToken: 't6hB2pDvnd7y4mSRvhThpg056DM4CBbFtKWZQ1F2WLIWt9el2UHJqViOxAOH1s1zi6VE4Bj5EkT1be2Ji',
        fingerPrint: '987654321'
    }
]

userRepository.getAllUsers = function () {
    return users
}

module.exports = userRepository