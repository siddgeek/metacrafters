// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyCustomToken {
    string public name;             // The name of the token
    string public symbol;           // The symbol of the token (e.g., ETH, DAI, etc.)
    uint256 public totalSupply;     // Total supply of the token

    mapping(address => uint256) public balanceOf;  // Mapping of token balances

    event Transfer(address indexed from, address indexed to, uint256 value);  // Event to log token transfers

    // Constructor to initialize the token details
    constructor(string memory _name, string memory _symbol, uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        balanceOf[msg.sender] = _totalSupply;  // Assign initial supply to contract deployer
    }

    // Function to mint new tokens
    function mint(address _to, uint256 _amount) public {
        require(_to != address(0), "Invalid address");
        require(_amount > 0, "Invalid amount");

        totalSupply += _amount;
        balanceOf[_to] += _amount;

        emit Transfer(address(0), _to, _amount);
    }

    // Function to burn tokens
    function burn(address _from, uint256 _amount) public {
        require(_from != address(0), "Invalid address");
        require(balanceOf[_from] >= _amount, "Insufficient balance");

        totalSupply -= _amount;
        balanceOf[_from] -= _amount;

        emit Transfer(_from, address(0), _amount);
    }
}