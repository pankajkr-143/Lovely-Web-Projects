# Solution of Sai's Mini Project

def bank_account_operations(initial_balance, operations):
    balance = initial_balance
    transactions = []  
    commits = []       

    for operation in operations:
        parts = operation.split()
        command = parts[0]

        if command == "read":
            print(balance)

        elif command == "credit":
            amount = int(parts[1])
            transactions.append(amount)  
            balance += amount

        elif command == "debit":
            amount = int(parts[1])
            transactions.append(-amount) 
            balance -= amount

        elif command == "abort":
            transaction_index = int(parts[1]) - 1 
            if transaction_index < len(transactions) and transaction_index >= 0:
                
                transaction = transactions[transaction_index]
                balance -= transaction  
                transactions[transaction_index] = 0  # Mark as aborted

        elif command == "commit":
            commits.append(balance)  
            
            transactions = [t for t in transactions if t != 0]

        elif command == "rollback":
            commit_index = int(parts[1]) - 1  
            if commit_index < len(commits) and commit_index >= 0:  
                balance = commits[commit_index]  

initial_balance = int(input())
N = int(input())
operations = [input().strip() for _ in range(N)]

bank_account_operations(initial_balance, operations)


# Explaination

# Initialization: We start with the initial balance and create two lists: 
# transactions to track the changes made (credits and debits) and commits to 
# store the balance after each commit.

# Operation Handling:

# read: Simply print the current balance.
# credit: Add the amount to the balance and record the transaction.
# debit: Subtract the amount from the balance and record the transaction.
# abort: Check if the transaction can be aborted (i.e., it hasn't been committed). If so, adjust the balance accordingly.
# commit: Save the current balance to the commits list and clear the transactions that have been committed.
# rollback: Restore the balance to what it was after the specified commit and mark all transactions as aborted.